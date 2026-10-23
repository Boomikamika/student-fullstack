
package com.testware.testware_jpa;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Save a product after validating its price
    public ProductQ11 saveProduct(ProductQ11 product) {
        if (product.getPrice() <= 0) {
            throw new IllegalArgumentException(
                    "Price must be greater than 0");
        }

        return productRepository.save(product);
    }

    // Get all products
    public List<ProductQ11> getAllProducts() {
        return productRepository.findAll();
    }

    // Get one product by ID
    public Optional<ProductQ11> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // Update price and quantity
    public Optional<ProductQ11> updateProduct(
            Long id, ProductQ11 updatedProduct) {

        Optional<ProductQ11> optionalProduct =
                productRepository.findById(id);

        if (optionalProduct.isEmpty()) {
            return Optional.empty();
        }

        ProductQ11 product = optionalProduct.get();
        product.setPrice(updatedProduct.getPrice());
        product.setQuantity(updatedProduct.getQuantity());

        return Optional.of(productRepository.save(product));
    }

    // Delete a product
    public boolean deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            return false;
        }

        productRepository.deleteById(id);
        return true;
    }

    // Find products above a price
    public List<ProductQ11> getProductsAbovePrice(double price) {
        return productRepository.findByPriceGreaterThan(price);
    }

    // Sort products by price, highest first
    public List<ProductQ11> getSortedProducts() {
        return productRepository.findAll(
                Sort.by(Sort.Direction.DESC, "price"));
    }

    // Count products
    public long countProducts() {
        return productRepository.count();
    }
}
