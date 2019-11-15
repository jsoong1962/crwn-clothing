import React from 'react';
import {Route} from 'react-router-dom';
// import {updateCollections} from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const {fetchCollectionsAsync} = this.props;
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
    // const {updateCollections} = this.props;
    // const collectionRef = firestore.collection('collections');
    //
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap)
    //   this.setState({loading: false});
    // })




    // this. unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap)
    //   this.setState({loading: false});
    // })
  }

  render() {

    // const {match, isCollectionsLoaded} = this.props;
    const {match} = this.props;
    // const {loading} = this.state;
      return (

        // <Route exact path = {`${match.path}`} render={(props) => < CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
        // <Route path = {`${match.path}/:collectionId`} render={(props) => < CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
        <div className='shop-page'>

            <Route exact path = {`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path = {`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
      )
    }
  }


// const mapStateToProps = createStructuredSelector({
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });
const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
