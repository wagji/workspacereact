package com.lab.DiaryAppBE.Diary.Entity;


import java.sql.Timestamp;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.lab.DiaryAppBE.Diary.DTO.DiaryDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "Diary")
public class DiaryEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "date")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date date;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "emotionId")
	private int emotionId;
	
	public DiaryEntity(DiaryDTO diaryDTO) 
	{
		this.date = diaryDTO.getDate();
		this.content = diaryDTO.getContent();
		this.emotionId = diaryDTO.getEmotionId();
		
	}
}
