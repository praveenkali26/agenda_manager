import { useState, useEffect } from 'react';

const useForm = (updated) => {
  //--------state hooks------Declaration//
  const [addAgendaForm, setAddAgendaForm] = useState(false); //toggle main button
  const [viewList, setviewList] = useState([]); //Toprint input from form
  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    topics: [],
  }); // State for Input Declaration
  const [topic, setTopic] = useState(''); //Topic Input
  const [subBtn, setSubBtn] = useState(true); //Submit Button
  const [error, setError] = useState({}); //validate error hooks

  //-------Function Declaration--------//
  //function to get data from form & storing
  const getData = (data) => {
    setAddAgendaForm(!addAgendaForm);
    setviewList((prev) => [...prev, data]);
  };
  // viewList/add agenda button
  const handleClick = () => {
    setAddAgendaForm(!addAgendaForm);
  };
  //Validate funtion for input
  const validate = (e) => {
    if (!e.target.value.match(/^[a-zA-Z][a-zA-Z0-9!@#$&()-`.+,\s]*$/)) {
      setError({ ...error, [e.target.name]: true });
    } else {
      return setError({ ...error, [e.target.name]: false });
    }
  };
  //(title & description) value storing & Validating
  const storeData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    validate(e);
  };
  //topic value storing & Validating
  const handleTopic = (e) => {
    setTopic(e.target.value);
    validate(e);
  };
  //+add button function
  const addTopic = () => {
    inputData.topics.push(topic);
    setTopic('');
    setSubBtn(false);
  };
  //Form submit Button
  const updateData = (e) => {
    e.preventDefault();
    updated(inputData);
  };
  //useeffect for printing the initial value
  useEffect(() => {
    let viewList = [
      {
        title: 'Angular',
        description: 'Some description about the angular',
        topics: [
          'Introduction',
          'Typescript',
          'why Angular',
          'Understanding Versions',
          'Fundamentals',
        ],
      },
    ];
    setviewList(viewList);
  }, []);

  return {
    inputData,
    topic,
    storeData,
    handleTopic,
    addTopic,
    subBtn,
    handleClick,
    addAgendaForm,
    viewList,
    getData,
    updateData,
    error,
  };
};
export default useForm;
