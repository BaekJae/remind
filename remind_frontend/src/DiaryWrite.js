import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Parser from 'html-react-parser';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function DiaryWriteTest() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[diaryDate,setDiaryDate]=useState('')
    const[diaryTitle,setDiaryTitle]=useState('')
    const[diaryContent, setDiaryContent]=useState('')
    const[diary,setDiary] = useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const diary={diaryDate,diaryTitle, diaryContent}
    console.log(diary)
    fetch("http://localhost:9090/diary/post",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(diary)

  }).then(()=>{
    console.log("New Diary added")
  })
}



  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="diaryDate" variant="outlined" fullWidth 
      value={diaryDate}
      onChange={(e)=>setDiaryDate(e.target.value)}
      placeholder="YYYY-MM-DD"
      />
      <TextField id="outlined-basic" label="diaryTitle" variant="outlined" fullWidth
      value={diaryTitle}
      onChange={(e)=>setDiaryTitle(e.target.value)}
      />
      <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            setDiaryContent(data);
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
      <Button variant="contained" color="secondary"  onClick={handleClick}>
  submit
</Button>
    </form>
   
    </Paper>
    



    </Container>
  );
}
