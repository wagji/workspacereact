import axios from 'axios';

const DIARY_BASE_REST_API_URL = 'http://localhost:8000/api/diary';

class DiaryService
{
    getAllDiary()
    {
        return axios.get(DIARY_BASE_REST_API_URL);
    }
    
    
    createDiary(diary)
    {
        return axios.post(DIARY_BASE_REST_API_URL, diary);
    }


    getDiaryById(id)
    {
        return axios.get(DIARY_BASE_REST_API_URL + '/' + id);
    }
    

    updateDiary(id, diary)
    {
        return axios.put(DIARY_BASE_REST_API_URL + '/' + id, diary);
    }
    
    
    deleteDiary(id)
    {
        return axios.delete(DIARY_BASE_REST_API_URL + '/' + id);
    }
}

export default new DiaryService();