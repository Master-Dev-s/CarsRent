import styled from 'styled-components';

export const FileUploaderContainer = styled.div`
  #dropzone-external {
    background-color: rgba(183, 183, 183, 0.1);
    border-width: 2px;
    border-style: ridge;
    padding: 10px;
  }

  #dropzone-external > * {
    pointer-events: none;
  }

  #dropzone-external.dropzone-active {
    border-style: solid;
  }

  .widget-container > span {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  #title{
    font-size: 1.1em;
    font-weight: initial;
    margin-bottom: 0;
  }
  
  #dropzone-image {
    max-width: 100%;
    max-height: 100%;
  }

  #dropzone-text > span {
    text-align: center;
    font-weight: 100;
    opacity: 0.5;
  }

  #upload-progress {
    display: flex;
    margin-top: 10px;
  }

  .flex-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;