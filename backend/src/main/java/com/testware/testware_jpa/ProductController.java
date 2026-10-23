//
//package com.testware.testware_jpa;
//
//import org.springframework.data.domain.Sort;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/products")
//public class ProductController {
//
//    private final ProductRepository productRepository;
//
//    public ProductController(ProductRepository productRepository) {
//        this.productRepository = productRepository;
//    }
//  //Q13
//    @PostMapping
//    public ResponseEntity<ProductQ11> addProduct(
//            @RequestBody ProductQ11 product) {
//
//        ProductQ11 savedProduct = productRepository.save(product);
//
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .body(savedProduct);
//    }
//
////Q14
//
//    @GetMapping
//    public ResponseEntity<List<ProductQ11>> getAllProducts() {
//        List<ProductQ11> products = productRepository.findAll();
//        return ResponseEntity.ok(products);
//    }
//
//    //Q15
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getProductById(@PathVariable Long id) {
//
//        Optional<ProductQ11> product = productRepository.findById(id);
//
//        if (product.isPresent()) {
//            return ResponseEntity.ok(product.get());
//        }
//
//        return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                .body("Product not found with id " + id);
//    }
//
//    //Q16
//
//    @PutMapping("/{id}")
//    public ResponseEntity<?> updateProduct(
//            @PathVariable Long id,
//            @RequestBody ProductQ11 updatedProduct) {
//
//        Optional<ProductQ11> optionalProduct = productRepository.findById(id);
//
//        if (optionalProduct.isPresent()) {
//            ProductQ11 product = optionalProduct.get();
//
//            product.setPrice(updatedProduct.getPrice());
//            product.setQuantity(updatedProduct.getQuantity());
//
//            ProductQ11 savedProduct = productRepository.save(product);
//
//            return ResponseEntity.ok(savedProduct);
//        }
//
//        return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                .body("Product not found with id " + id);
//    }
//
//
//    //Q17
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
//
//        Optional<ProductQ11> product = productRepository.findById(id);
//
//        if (product.isPresent()) {
//            productRepository.deleteById(id);
//            return ResponseEntity.ok("Product deleted");
//        }
//
//        return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                .body("Product not found with id " + id);
//    }
//
//    //Q18
//
//    @GetMapping("/above")
//    public ResponseEntity<List<ProductQ11>> getProductsAbovePrice(
//            @RequestParam double price) {
//
//        List<ProductQ11> products =
//                productRepository.findByPriceGreaterThan(price);
//
//        return ResponseEntity.ok(products);
//    }
//
//    //Q19
//
//
//    @GetMapping("/sorted")
//    public ResponseEntity<List<ProductQ11>> getSortedProducts() {
//
//        List<ProductQ11> products =
//                productRepository.findAll(
//                        Sort.by(Sort.Direction.DESC, "price"));
//
//        return ResponseEntity.ok(products);
//    }
//
//    @GetMapping("/count")
//    public ResponseEntity<Long> getProductCount() {
//
//        long total = productRepository.count();
//
//        return ResponseEntity.ok(total);
//    }
//
//
//}
//
