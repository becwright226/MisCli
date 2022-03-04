import React, { Component } from 'react'

interface DiaryProps {
    
}
 
interface DiaryState {
    
}
 
class Diary extends React.Component<DiaryProps, DiaryState> {
    constructor(props: DiaryProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return (<h1>Hello from Diary</h1> );
    }
}
 
export default Diary;