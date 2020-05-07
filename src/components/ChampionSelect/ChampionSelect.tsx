import React from 'react'
import champions from 'lol-champions'
import { makeStyles } from '@material-ui/core/styles';
import { findAllByAltText } from '@testing-library/react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const ChampionSelect = () => {
    // <Card>
    //     <p>{champions[0].name}</p>
    //     <p>{champions[0].title}</p>

    //     <img src={champions[0].icon} />

    //     <p>{champions[0].description}</p>

    //     <p>{JSON.stringify(champions)}</p>  
    // </Card>

    const classes = useStyles();
    const cards = champions.map((champion) => {  return(  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={champion.icon}
        title={champion.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {champion.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {champion.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions> */}
  </Card>)
  })
    return (
        <div> {cards} </div>
      
 )
    
}
const alex = {
    name: "Alex Wahlbrink",
    location: "Kansas City",
    languagesKnown: "English",
    projectsCreated: "Personal site, Store front, Studio",
    idealWorkplace: "Has humans",
    topSkills: "Attitude",
    elavatorPitch: "Hello, I am Alex Wahlbrink and after graduation from college I took a job in the transportation industry. I worked for a firm that delivered freight from overseas to companies here in Kansas City area. My role as a customer service rep and dispatcher taught me many valuable skills.  Being detailed oriented and a how to be an effective communicator. While working at my previous job I started to see how technology could be leveraged to make my day a little bit easier.  From tracking shipments to a higher degree of accuracy to automating some of the billing process. As technology helped me do my job better, I hope to do the same for others.  That is why I am looking for a company that takes pride in solving issues for others. A company that values teaching and growing their employee’s skills. ",
    image:{
        url: "images/alex.png"
    }

};

// ReactDOM.render(
//     <App
//         aName={alex.name}
//         aLocation={alex.location}
//         aLanguagesKnown={alex.languagesKnown}
//         aProjectsCreated={alex.projectsCreated}
//         aIdealWorkplace={alex.idealWorkplace}
//         aTopSkills={alex.topSkills}
//         aElavatorPitch={alex.elavatorPitch}
//         image={alex.image}
//     />,
//     destination
// );
export default ChampionSelect