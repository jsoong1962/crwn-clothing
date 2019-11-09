import {createSelector} from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionIdParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionIdParam]
  )
 // converts object to array
  export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  )
