package com.lab.DiaryAppBE.Diary.DTO;


import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiaryDTO 
{
	private long id;
	
	private Date date;
	
	private String content;
	
	private int emotionId;

}
