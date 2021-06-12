import instance from './config';

class Axios {
    post(url,body){
        return instance.post(url,body)
    }
    get(url){
        return instance.get(url)
    }
    delete(url){
        return instance.delete(url)
    }
    put(url,body){
        return instance.put(url,body)
    }
}

export default new Axios()