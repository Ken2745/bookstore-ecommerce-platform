package com.ecommerce.bookstore.service;

import java.util.stream.Collectors;

import com.ecommerce.bookstore.entity.Brand;
import com.ecommerce.bookstore.model.BrandResponse;
import com.ecommerce.bookstore.repository.BrandRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Log4j2
public class BrandServiceImpl implements BrandService{

        private final BrandRepository brandRepository;

    public BrandServiceImpl(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @Override
    public List<BrandResponse> getAllBrands() {
        log.info("Fetching all Brands!!!");
        //Fetch brands
        List<Brand> brandList = brandRepository.findAll();
        //now use stream operator to map with response
        List<BrandResponse> brandResponses = brandList.stream()
                .map(this::convertToBrandResponse)
                .collect(Collectors.toList());
        log.info("Fetched all Brands");
        return brandResponses;

    }
    private BrandResponse convertToBrandResponse(Brand brand){
        return BrandResponse.builder()
                .id(brand.getId())
                .name(brand.getName())
                .build();
    }
}
