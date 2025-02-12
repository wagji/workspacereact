package com.lab.DiaryAppBE.Diary.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lab.DiaryAppBE.Diary.Entity.DiaryEntity;

@Repository
public interface DiaryRepository extends JpaRepository<DiaryEntity, Long>
{
	Optional<DiaryEntity> findById(long id);

	
}
