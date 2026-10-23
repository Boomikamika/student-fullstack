
package com.testware.testware_jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductQ11, Long> {
    List<ProductQ11> findByPriceGreaterThan(double price);
}

