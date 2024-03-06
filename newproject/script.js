*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body{
	background: #e4e9f7;
}
.container{
	display: flex;
	align-items: center;
    justify-content: center;
    min-height: 90vh;	
}
.box{
	background: #fdfdfd;
	display: flex;
	flex-direction: column;
	padding: 25px 25px;
	border-radius: 20px;
	box-shadow: 0 0 128px 0 rgba(0,0,0,0,.1),
	            0 32px 64px -48px rgba(0,0,0,0,.5);
}
.form-box{
	width: 450px;
	margin: 0px 10px;
}
.form-box header{
	font-size: 25px;
	font-weight: 600;
	padding-bottom: 10px;
	border-bottom: 1px solid #e6e6e6;
	margin-bottom: 10px;
}
.form-box form .field{
	display: flex;
	margin-bottom: 10px;
	flex-direction: column;
}
.form-box form .input input{
	height: 40px;
	width: 100%;
	font-size: 16px;
	padding: 0 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
	outline: none;
}
.btn{
	height: 35px;
	background: rgba(76,68,182,0.808);
	boder: 0;
	border-radius: 5px;
	color: #fff;
	font-size: 15px;
	cursor: pointer;
	transition: all .3s;
	margin-top: 10px;
	padding: 0px 10px;
}
.btn:hover{
	opacity: 0,82;
}
.submit{
	width: 100%;
}
.links{
	margin-bottom: 15px;
}