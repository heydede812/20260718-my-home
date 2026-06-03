Add-Type -AssemblyName System.Drawing
$targetFile = Get-ChildItem "images" | Where-Object { $_.Extension -eq ".jpg" -and $_.Name.Length -eq 14 -and $_.Name -notlike "*temp*" -and $_.Name -notlike "*clean*" } | Select-Object -First 1
if ($targetFile) {
    Write-Output "Processing image: $($targetFile.FullName)"
    $bmp = New-Object System.Drawing.Bitmap($targetFile.FullName)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Define source rect: clean beige background above the text on the left
    # X: 0 to 180, Y: 110 to 150 (height 40)
    $srcRect = New-Object System.Drawing.Rectangle 0, 110, 180, 40
    
    # Define dest rect: where the watermark "广州派佳皮具" is located
    # X: 0 to 180, Y: 155 to 195
    $destRect = New-Object System.Drawing.Rectangle 0, 155, 180, 40
    
    # Draw the clean patch over the watermark
    $g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $g.Dispose()
    
    $cleanPath = Join-Path $targetFile.DirectoryName "clean_size_guide_final.jpg"
    if (Test-Path $cleanPath) { Remove-Item $cleanPath -Force }
    $bmp.Save($cleanPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    
    Write-Output "Saved to clean file: $cleanPath"
} else {
    Write-Output "Image not found!"
}
