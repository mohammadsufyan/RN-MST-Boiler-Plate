import { types, flow, onSnapshot, onAction } from "mobx-state-tree"
import { getAPI } from '../api/api';
import URLs from '../api/urls';

const App = types.model('App', {
  category: types.string,
  image: types.string,
  name: types.string,
  rights: types.string,
  summary: types.string,
}).actions(self => ({
  
}))

const AppsList = types.model({
  isLoading: false,
  appsList: types.array(App)
}).views(self => ({

})).actions(self => {
  const getAppsList = flow(function* (){
    try {
      self.isLoading = true
      const data = yield getAPI(URLs.appListURL)
      const appsList = data.feed.entry.map((app) => {
        return {
          category: app.category.attributes.label,
          image: app['im:image'][(app['im:image'].length - 1)].label,
          name: app['im:name'].label,
          rights: app.rights.label,
          summary: app.summary.label,
        }
      });
      self.isLoading = false
      self.appsList = appsList
    } catch (error) {
      console.error("Failed to fetch data: ", error)
    }
  })
  
  return {
    getAppsList
  }
}).create({
  appsList: []
})

onAction(AppsList, call => {
  console.log("AppsList Action: ", call)
})

onSnapshot(AppsList, newSnapshot => {
  console.log("AppsList: ", newSnapshot)
})

export default AppsList
