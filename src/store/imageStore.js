import { action, runInAction, observable, makeObservable } from 'mobx'


class ImageStore {
    id = 1
    imageUrl = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'

    async fetchImage(){
        const characterId = ++this.id
        console.log('characterId: ', characterId)
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        const data = await response.json()
        runInAction(() => {
            this.imageUrl = data.image
        })
    }
}

const imageStore = new ImageStore()
makeObservable(imageStore,{
    id: observable,
    imageUrl: observable,
    fetchImage: action
})

export default imageStore

