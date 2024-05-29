import React from 'react';
import '../App.css';
import useForm from '../utils/FormHooks.js';
export default function NewAgenda({ updated }) {
  const {
    inputData,
    topic,
    storeData,
    handleTopic,
    updateData,
    addTopic,
    subBtn,
    error,
  } = useForm(updated);
  return (
    <>
      <form onSubmit={updateData}>
        <div className="form-input">
          <lable>Title</lable>
          <br />
          <input
            type="text"
            name="title"
            value={inputData.title}
            onChange={storeData}
            autoComplete="off"
            placeholder="Enter the title"
          />
          {error.title && <div className="errorMessage">Title is required</div>}
        </div>
        <div className="form-input">
          <lable>Description</lable>
          <br />
          <input
            name="description"
            value={inputData.description}
            onChange={storeData}
            autoComplete="off"
            placeholder="Enter the description"
          />
          {error.description && (
            <div className="errorMessage">Description is required</div>
          )}
        </div>
        <div className="form-topic">
          <lable>Enter Topic</lable>
          <br />
          <input
            name="topic"
            value={topic}
            onChange={handleTopic}
            autoComplete="off"
            placeholder="Enter the topic"
            style={{ maxWidth: '50%' }}
          />
          <span className="form-btn">
            <button
              className="btn-Style"
              type="button"
              onClick={addTopic}
              disabled={!topic || error.topic}
              style={{ marginRight: '3rem' }}
            >
              + Add Topic
            </button>
            <button
              className="btn-Style"
              type="submit"
              disabled={subBtn || topic}
            >
              Submit Agenda
            </button>
          </span>
          {error.topic && <div className="errorMessage">Topic is required</div>}
        </div>
      </form>
      {!subBtn ? (
        <div className="form-list">
          <div className="container prevAgenda ">
            <div className="headerFooter">Added Topics</div>
            <div className="listView">
              {inputData.topics.map((e, i) => (
                <div className="topicP" key={i}>
                  {e}
                </div>
              ))}
            </div>
            <div className="headerFooter">Refer the topics you added</div>
          </div>
        </div>
      ) : (
        <div className="errorMessage col-" style={{ paddingTop: '3rem' }}>
          No Topic Added
        </div>
      )}
    </>
  );
}
