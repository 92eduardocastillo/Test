import React, { useState } from 'react';
import { Upload } from 'antd';

export const Demo = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    if(newFileList.length===2){
      newFileList.shift()
    }
    
      console.log(newFileList);
        
        setFileList(newFileList);
      
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    console.log(image);
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}        
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
  );
};

