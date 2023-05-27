package com.digitalhouse.carsrent.repository;

import com.digitalhouse.carsrent.model.Caracteristicas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaracteristicasRepository extends JpaRepository<Caracteristicas, Long> {
}
