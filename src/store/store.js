import { makeObservable, observable, action, computed}  from 'mobx'

class Store {
    likesCount = 12;
    comments = ["Wow", "It is working"]
    

    updateCount(){
        this.likesCount ++;
    }

    postComment(comment){
        this.comments.push(comment)
    }

    get commentsCount(){
        return this.comments.length
    }
}

const storeInstance = new Store()

makeObservable(storeInstance, {
    likesCount: observable,
    comments: observable,
    updateCount: action,
    postComment: action,
    commentsCount: computed
})
export default storeInstance;