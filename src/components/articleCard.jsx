import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { trimString } from '../helpers/trimString';
import { CardActionArea } from '@mui/material';

export class ArticleCardComponent extends Component {
  returnImageURL(images) {
    const image = images.filter((i) => i.type === 'Standard Image');

    return image[0].src;
  }

  returnImageCaption(images) {
    const image = images.filter((i) => i.type === 'Standard Image');

    return image[0].caption;
  }
  render() {
    const story = this.props.articleSingle.story;
    const storyId = this.props.articleSingle.storyId;
    return (
      <CardActionArea href={'/' + story.section + '/' + storyId}>
        <Card sx={{ maxWidth: 345, minHeight: 345 }} href="/">
          <CardMedia
            sx={{ height: 140 }}
            image={this.returnImageURL(story.images)}
            title={this.returnImageCaption(story.images)}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {story.headline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {trimString(story.intro, 80)}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  }
}

export default ArticleCardComponent;
