import React,{ Component } from 'react'
import axios from 'axios'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { Time:152165,V1:-4.67, V2:4.19, V3:-8.392,V4:7.74,V5:-1.13,V6:-2.09,V7:-3.83,V8:0.54,V9:-1.52,V10:-2.32,V11:4.35,V12:-8.66,V13:-1.15,V14:-13.48,V15:1.20,V16:4.28,V17:-5.65,V18:-1.23,V19:1.08,V20:-0.18
  ,V21:0.55,V22:0.65,V23:0.48,V24:-0.62,V25:-0.29,V26:0.37,V27:-2.67,V28:0.41,Amount:1,Class:0,
  Xgboost:false,AdaBoost:false,RandomForest:false,CatBoost:false,LightGBM:false,AllModels:false

}


	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)

	
}

handleSubmit(event){

	event.preventDefault()

	if (this.state.Xgboost) {
		
		delete this.state.Xgboost
		delete this.state.AdaBoost
		delete this.state.RandomForest
		delete this.state.CatBoost
		delete this.state.LightGBM
		delete this.state.AllModels
		var data = [this.state];

		var config = {
		  method: 'post',
		  url: 'http://127.0.0.1:5000/xgboost',
		  headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  data : data
		};
		axios(config)
		.then(function (response) {
		  alert("This transaction is "+Math.round(response.data*100)+"% fraud");
		})
		.catch(function (error) {
		  console.log(error);
		});
		return null
	}
	if (this.state.AllModels) {
		delete this.state.Class
		delete this.state.Xgboost
		delete this.state.AdaBoost
		delete this.state.RandomForest
		delete this.state.CatBoost
		delete this.state.LightGBM
		delete this.state.AllModels
		var data = [this.state];

		var config = {
		  method: 'post',
		  url: 'http://127.0.0.1:5000/AllModels',
		  headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  data : data
		};
		axios(config)
		.then(function (response) {
		  alert("This transaction is "+response.data+" % fraud");
		})
		.catch(function (error) {
		  console.log(error);
		});
		return null
	}
	if (this.state.AdaBoost) {
		
		delete this.state.Class
		delete this.state.Xgboost
		delete this.state.AdaBoost
		delete this.state.RandomForest
		delete this.state.CatBoost
		delete this.state.LightGBM
		delete this.state.AllModels
		var data = [this.state];

		var config = {
		  method: 'post',
		  url: 'http://127.0.0.1:5000/AdaBoost',
		  headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  data : data
		};
		axios(config)
		.then(function (response) {
		  alert("This transaction is "+Math.round(response.data*100)+"% fraud");
		})
		.catch(function (error) {
		  console.log(error);
		});
		return null
	}
	if (this.state.RandomForest) {
		
		delete this.state.Class
		delete this.state.Xgboost
		delete this.state.AdaBoost
		delete this.state.RandomForest
		delete this.state.CatBoost
		delete this.state.LightGBM
		delete this.state.AllModels
		var data = [this.state];

		var config = {
		  method: 'post',
		  url: 'http://127.0.0.1:5000/RandomForest',
		  headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  data : data
		};
		axios(config)
		.then(function (response) {
		  alert("This transaction is "+Math.round(response.data*100)+"% fraud");
		})
		.catch(function (error) {
		  console.log(error);
		});
		return null
	}
	if (this.state.CatBoost) {
		
		delete this.state.Class
		delete this.state.Xgboost
		delete this.state.AdaBoost
		delete this.state.RandomForest
		delete this.state.CatBoost
		delete this.state.LightGBM
		delete this.state.AllModels
		var data = [this.state];

		var config = {
		  method: 'post',
		  url: 'http://127.0.0.1:5000/CatBoostClassifier',
		  headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  data : data
		};
		axios(config)
		.then(function (response) {
		  alert("This transaction is "+Math.round(response.data*100)+"% fraud");
		})
		.catch(function (error) {
		  console.log(error);
		});
		return null
	}
	if (this.state.LightGBM) {
		
		delete this.state.Class
		delete this.state.Xgboost
		delete this.state.AdaBoost
		delete this.state.RandomForest
		delete this.state.CatBoost
		delete this.state.LightGBM
		delete this.state.AllModels
		var data = [this.state];

		var config = {
		  method: 'post',
		  url: 'http://127.0.0.1:5000/LightGBM',
		  headers: { 
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
		  mode: 'cors',
		  data : data
		};
		axios(config)
		.then(function (response) {
		  alert("This transaction is "+Math.round(response.data*100)+"% fraud");
		})
		.catch(function (error) {
		  console.log(error);
		});
		return null
	}
else{
	alert("select a model");

}
  
}


handleChange(event){
	this.setState({
	[event.target.name] : parseFloat(event.target.value)
	})
}

handleChangex = e => this.setState({ Xgboost: e.target.checked });
handleChange1 = e => this.setState({ CatBoost: e.target.checked });
handleChange2 = e => this.setState({ LightGBM: e.target.checked });
handleChange3 = e => this.setState({ RandomForest: e.target.checked });
handleChange4 = e => this.setState({ AdaBoost: e.target.checked });
handleChange5 = e => this.setState({ AllModels: e.target.checked });


render(){
	const mystyle = {

		margin:"10px",
	  };
	return(
		<div>
		<div>
		<input
			name='Xgboost'
			placeholder='Xgboost'
			value = {this.state.Xgboost}
			onChange={this.handleChangex}
			checked={this.state.Xgboost} 
			type="checkbox" 
			style={mystyle}
		/>
		<label htmlFor='Xgboost' >Xg boost</label>
		</div>
		<div>
		<input
			name='CatBoost'
			placeholder='CatBoost'
			value = {this.state.CatBoost}
			onChange={this.handleChange1}
			checked={this.state.CatBoost} 
			type="checkbox" 
			style={mystyle}
		/>
		<label htmlFor='CatBoost' >Cat Boost</label>
		</div>
		<div>
		<input
			name='LightGBM'
			placeholder='LightGBM'
			value = {this.state.LightGBM}
			onChange={this.handleChange2}
			checked={this.state.LightGBM} 
			type="checkbox" 
			style={mystyle}
		/>
		<label htmlFor='LightGBM' >Light GBM</label>
		</div>
		<div>
		<input
			name='RandomForest'
			placeholder='RandomForest'
			value = {this.state.RandomForest}
			onChange={this.handleChange3}
			checked={this.state.RandomForest} 
			type="checkbox" 
			style={mystyle}
		/>
		<label htmlFor='RandomForest' >Random Forest</label>
		</div>
		<div>
		<input
			name='AdaBoost'
			placeholder='AdaBoost'
			value = {this.state.AdaBoost}
			onChange={this.handleChange4}
			checked={this.state.AdaBoost} 
			type="checkbox" 
			style={mystyle}
		/>
		<label htmlFor='AdaBoost' >Ada Boost</label>
		</div>
		<div>
		<input
			name='AllModels'
			placeholder='AllModels'
			value = {this.state.AllModels}
			onChange={this.handleChange5}
			checked={this.state.AllModels} 
			type="checkbox" 
			style={mystyle}
		/>
		<label htmlFor='AllModels' >All Models</label>
		</div>

	<form onSubmit={this.handleSubmit} >

		<div>
		<label htmlFor='Time'>Time</label>
		<input
		style={mystyle}
			name='Time'
			placeholder='Time'
			value = {this.state.Time}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>V1</label>
		<input
		style={mystyle}
			name='V1'
			placeholder='V1'
			value={this.state.V1}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V2'>V2</label>
		<input
		style={mystyle}
			name='V2'
			placeholder='V2'
			value={this.state.V2}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V3'>V3</label>
		<input
		style={mystyle}
			name='V3'
			placeholder='V3'
			value={this.state.V3}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V4'>V4</label>
		<input
		style={mystyle}
			name='V4'
			placeholder='V4'
			value={this.state.V4}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V5'>V5</label>
		<input
		style={mystyle}
			name='V5'
			placeholder='V5'
			value={this.state.V5}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V6'>V6</label>
		<input
		style={mystyle}
			name='V6'
			placeholder='V6'
			value={this.state.V6}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V7'>V7</label>
		<input
		style={mystyle}
			name='V7'
			placeholder='V7'
			value={this.state.V7}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V8'>V8</label>
		<input
		style={mystyle}
			name='V8'
			placeholder='V8'
			value={this.state.V8}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V9'>V9</label>
		<input
		style={mystyle}
			name='V9'
			placeholder='V9'
			value={this.state.V9}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V10'>V10</label>
		<input
		style={mystyle}
			name='V10'
			placeholder='V10'
			value={this.state.V10}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V11'>V11</label>
		<input
		style={mystyle}
			name='V11'
			placeholder='V11'
			value={this.state.V11}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V12'>V12</label>
		<input
		style={mystyle}
			name='V12'
			placeholder='V12'
			value={this.state.V12}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V13'>V13</label>
		<input
		style={mystyle}
			name='V13'
			placeholder='V13'
			value={this.state.V13}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V14'>V14</label>
		<input
		style={mystyle}
			name='V14'
			placeholder='V14'
			value={this.state.V14}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V15'>V15</label>
		<input
		style={mystyle}
			name='V15'
			placeholder='V15'
			value={this.state.V15}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V16'>V16</label>
		<input
		style={mystyle}
			name='V16'
			placeholder='V16'
			value={this.state.V16}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V17'>V17</label>
		<input
		style={mystyle}
			name='V17'
			placeholder='V17'
			value={this.state.V17}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V18'>V18</label>
		<input
		style={mystyle}
			name='V18'
			placeholder='V18'
			value={this.state.V18}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V19'>V19</label>
		<input
		style={mystyle}
			name='V19'
			placeholder='V19'
			value={this.state.V19}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V20'>V20</label>
		<input
		style={mystyle}
			name='V20'
			placeholder='V20'
			value={this.state.V20}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V21'>V21</label>
		<input
		style={mystyle}
			name='V21'
			placeholder='V21'
			value={this.state.V21}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V22'>V22</label>
		<input
		style={mystyle}
			name='V22'
			placeholder='V22'
			value={this.state.V22}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V23'>V23</label>
		<input
		style={mystyle}
			name='V23'
			placeholder='V23'
			value={this.state.V23}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V24'>V24</label>
		<input
		style={mystyle}
			name='V24'
			placeholder='V24'
			value={this.state.V24}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V25'>V25</label>
		<input
		style={mystyle}
			name='V25'
			placeholder='V25'
			value={this.state.V25}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V26'>V26</label>
		<input
		style={mystyle}
			name='V26'
			placeholder='V26'
			value={this.state.V26}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V27'>V27</label>
		<input
		style={mystyle}
			name='V27'
			placeholder='V27'
			value={this.state.V27}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='V28'>V28</label>
		<input
		style={mystyle}
			name='V28'
			placeholder='V28'
			value={this.state.V28}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='Amount'>Amount</label>
		<input
		style={mystyle}
			name='Amount'
			placeholder='Amount'
			value={this.state.Amount}
			onChange={this.handleChange}
		/>
		</div>

		<div>
		<button style={{marginTop: 20}}>Submit</button>
		</div>
	</form>
	</div>
	)
}
}

export default Form
