
package com.testware.testware_jpa;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController20 {

    private final ProductService productService;

    // Constructor injection
    public ProductController20(ProductService productService) {
        this.productService = productService;
    }

    // Q13: Add a product
    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody ProductQ11 product) {
        try {
            ProductQ11 savedProduct = productService.saveProduct(product);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedProduct);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Q14: Get all products
    @GetMapping
    public ResponseEntity<List<ProductQ11>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    // Q15: Get product by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        Optional<ProductQ11> product = productService.getProductById(id);

        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Product not found with id " + id);
    }

    // Q16: Update product price and quantity
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(
            @PathVariable Long id,
            @RequestBody ProductQ11 updatedProduct) {

        Optional<ProductQ11> product =
                productService.updateProduct(id, updatedProduct);

        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Product not found with id " + id);
    }

    // Q17: Delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        boolean deleted = productService.deleteProduct(id);

        if (deleted) {
            return ResponseEntity.ok("Product deleted");
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Product not found with id " + id);
    }

    // Q18: Find products above a given price
    @GetMapping("/above")
    public ResponseEntity<List<ProductQ11>> getProductsAbovePrice(
            @RequestParam double price) {

        return ResponseEntity.ok(
                productService.getProductsAbovePrice(price));
    }

    // Q19: Sort products by price
    @GetMapping("/sorted")
    public ResponseEntity<List<ProductQ11>> getSortedProducts() {
        return ResponseEntity.ok(productService.getSortedProducts());
    }

    // Q19: Count products
    @GetMapping("/count")
    public ResponseEntity<Long> getProductCount() {
        return ResponseEntity.ok(productService.countProducts());
    }
}
