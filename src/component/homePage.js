import React from 'react';
import '../App.css';
import NewAgenda from './AgendaForm.js';
import useForm from '../utils/FormHooks.js';

export default function HomePage() {
  const { handleClick, addAgendaForm, viewList, getData } = useForm();

  return (
    <div className="mainContainer">
      <h1>Agenda Manager</h1>
      <div className="container displayAgenda">
        <button onClick={handleClick} className="mainBtn">
          {addAgendaForm ? 'Click to view Agenda' : 'Click to Add Agenda'}
        </button>
        <div>{addAgendaForm && <NewAgenda updated={getData} />}</div>
        <div>
          {!addAgendaForm
            ? viewList.map((agenda, i) => (
                <div className="container prevAgenda" key={i}>
                  <div className="headerFooter">{agenda.title}</div>
                  <div className="listView">
                    {agenda.topics.map((topic, i) => (
                      <div className="topicP" key={i}>
                        {topic}
                      </div>
                    ))}
                  </div>
                  <div className="headerFooter">{agenda.description}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
