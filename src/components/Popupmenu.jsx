import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Popupmenu.css";

function PopupMenu({ onClose }) {
  return (
    
    <div className="popup-select">
      <h2>Select Quiz</h2>
      <div className="flex-cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="History.jpg"
            title="History"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              History
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Link to="/quiz/history">
              <Button className="start-quiz-btn">Let's Go!</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="Geography.jpg"
            title="Geography"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Geography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Link to="/quiz/geography">
              <Button className="start-quiz-btn">Let's Go!</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="Informatics.jpg"
            title="Informatics"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Informatics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Link to="/quiz/${quizType}">
              <Button  className="start-quiz-btn">Let's Go!</Button>
            </Link>
          </CardActions>
        </Card>
  
      </div>
      <div className="btn-group">
        <button className="info-btn exit-btn" onClick={onClose}>Exit</button>
      </div>
    </div>
  );
}

export default PopupMenu;
