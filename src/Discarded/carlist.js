import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../Redux/action';

class CarList extends React.Component {
    render() {
        return (
            <div>Testttttinnnggg
            <button handleClick={this.props.loadData} make={this.props.make}></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(CarList);


 




// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchProfileData } from '../../Redux/action';

// class CarList extends React.Component {

//     componentDidMount() {
//         this.props.fetchProfileData(this.props.match.params.MakeId)
//     }

//     render() {
//         return(
//             <div>
//             MakeID: {this.props.selectedProfile.loading ? '...Loading' : this.props.selectedProfile.results.MakeName}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     selectedProfile: state.selectedProfile
// })

// const mapDispatchToProps = {
//     fetchProfileData
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CarList)