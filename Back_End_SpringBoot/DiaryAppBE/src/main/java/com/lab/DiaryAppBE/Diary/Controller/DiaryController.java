package com.lab.DiaryAppBE.Diary.Controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.lab.DiaryAppBE.Diary.DTO.DiaryDTO;
import com.lab.DiaryAppBE.Diary.Entity.DiaryEntity;
import com.lab.DiaryAppBE.Diary.Repository.DiaryRepository;
import com.lab.DiaryAppBE.Diary.Service.DiaryService;
import com.lab.DiaryAppBE.Diary.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/diary")
@RequiredArgsConstructor
public class DiaryController
{
	private final DiaryRepository diaryRepository;
	private final DiaryService diaryService;

	
	
	//일기 전체 조회
	@GetMapping
	public List<DiaryEntity> getAllDiary()
	{
		System.out.println("getAllDiary method 호출됨");
		return diaryService.getDiaryList();
	}
	
	
	//일기 생성
	@PostMapping
	public DiaryEntity createDiary(@RequestBody DiaryDTO diaryDTO)
	{
		return diaryService.createDiary(diaryDTO);
	}
	
	
	//일기 1개 가져오기
	@GetMapping("{id}")
	public ResponseEntity<DiaryEntity> getDiaryById(@PathVariable(name="id") long id)
	{
		DiaryEntity diary = diaryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Diary not exist with id: " + id));
		
		return ResponseEntity.ok(diary);
	}
	
	
	//일기 update
	@PutMapping("{id}")
	public ResponseEntity<DiaryEntity> updateDiary(@PathVariable(name="id") long id, @RequestBody DiaryEntity diaryDetails)
	{
		DiaryEntity updateDiary = diaryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Diary not exist with id: " + id));
		updateDiary.setDate(diaryDetails.getDate());
		updateDiary.setContent(diaryDetails.getContent());
		updateDiary.setEmotionId(diaryDetails.getEmotionId());
		diaryRepository.save(updateDiary);
		
		return ResponseEntity.ok(updateDiary);
	}
	
	
	//일기 삭제
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteUpdate(@PathVariable(name="id") long id)
	{
		DiaryEntity diary = diaryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Diary not exist with id: " + id));		
		
		diaryRepository.delete(diary);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
	
	
	
	
}
