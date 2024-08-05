package com.sunbeam.utils;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Component
public class FileUploadUtil {

    private final String uploadDir = "uploads/";

    public String saveFile(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            throw new IllegalStateException("Failed to store empty file.");
        }

        String originalFilename = file.getOriginalFilename();
        String fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String uniqueFilename = UUID.randomUUID().toString() + fileExtension;

        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Path filePath = uploadPath.resolve(uniqueFilename);
        Files.copy(file.getInputStream(), filePath);

        return uniqueFilename;
    }

    public String getUploadDir() {
        return uploadDir;
    }
}
