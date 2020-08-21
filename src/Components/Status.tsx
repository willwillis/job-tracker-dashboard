import React from 'react';

class MyJobStatus extends React.Component {
  componentDidMount() {
    const apiUrl = 'http://ushouasysw72vd:9000/jobstatus/PNC-EST-MONITOR-SERVER-LOGON-SESSION-72';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default MyJobStatus;
