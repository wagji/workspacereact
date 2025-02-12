package com.lab.DiaryAppBE.Diary;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Locale;

public class TimeConvert 
{
	String str = "2024-02-02";
	Timestamp ts;
	LocalDateTime ldt = LocalDateTime.now();
	Date date;
	Instant instant;
	
	private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
	
	public static Date pareDate(String dateStr) throws ParseException 
	{
		Date date = formatter.parse(dateStr);
		return date;
	}
	
	public static String formatDate(Date date)
	{
		String dateStr = null;
		if(date != null)
		{
			dateStr = formatter.format(date);
		}
		return dateStr;
	}
   
    public static void main(String[] args) 
    {
        //  LocalDateTime to Timestamp
        LocalDateTime no = LocalDateTime.now();
        Timestamp tt = Timestamp.valueOf(no);
        
        System.out.println(no);          // 2019-06-14T15:50:36.068076300
        System.out.println(tt);    // 2019-06-14 15:50:36.0680763

        //  Timestamp to LocalDateTime
        LocalDateTime localDateTime = tt.toLocalDateTime();

        System.out.println(localDateTime);  // 2019-06-14T15:50:36.068076300
        
        //  LocalDate to Timestamp
        LocalDate now = LocalDate.now();
        Timestamp timestamp = Timestamp.valueOf(now.atStartOfDay());

        System.out.println(now);        // 2019-06-14
        System.out.println(timestamp);  // 2019-06-14 00:00:00.0

        //  Timestamp to LocalDate
        LocalDate localDate = timestamp.toLocalDateTime().toLocalDate();
        System.out.println(localDate);  // 2019-06-14
        
        Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime());  
        System.out.println(ts);
        
        Date date1 = new Date();  
        Timestamp ts1 = new Timestamp(date1.getTime());  
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
        System.out.println(formatter.format(ts1));
        
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.KOREA);
        String str = sdf.format(new Date(timestamp.getTime()));
        System.out.println(str);
        
        java.sql.Timestamp timestamp_1 = java.sql.Timestamp.valueOf("2018-09-21 10:53:00.0");
        System.out.format("timestamp : %s\r", timestamp_1.getTime());
        System.out.format("date : %s\r\r", new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(timestamp_1));
        
        java.sql.Timestamp timestamp_2 = java.sql.Timestamp.valueOf(LocalDateTime.now());
        System.out.format("timestamp : %s\r", timestamp_2.getTime());
        java.sql.Date date2 = new java.sql.Date(timestamp_2.getTime());
        System.out.format("date : %s\r\r", new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(date2));
        
        java.sql.Timestamp timestamp_3 = new java.sql.Timestamp(Long.parseLong("1537495373964"));
        System.out.format("timestamp : %s\r", timestamp_3.getTime());
        System.out.format("date : %s", new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new java.sql.Date(timestamp_2.getTime())));
        
        
        
        
        
        
	}
	
}
