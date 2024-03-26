package com.lab.DiaryAppBE.Diary.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lab.DiaryAppBE.Diary.DTO.DiaryDTO;
import com.lab.DiaryAppBE.Diary.Entity.DiaryEntity;
import com.lab.DiaryAppBE.Diary.Repository.DiaryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DiaryService 
{
	private final DiaryRepository diaryRepository;
	
	//일기 list
	public List<DiaryEntity> getDiaryList()
	{
		return diaryRepository.findAll();
	}
	
	//일기 정보 생성
	public DiaryEntity createDiary(DiaryDTO diaryDTO)
	{
		DiaryEntity diary = new DiaryEntity(diaryDTO);
		return diaryRepository.save(diary);
		
	}
}
