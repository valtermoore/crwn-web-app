import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    //vai retornar um array das keys do object collections
    /*fez-se desta forma porque os dados do collection esta' guardado num object e nao num array, 
    por motivos de normalizacao de dados(para que nao demore procurar caso a lista fique grande no futuro)
    */
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );