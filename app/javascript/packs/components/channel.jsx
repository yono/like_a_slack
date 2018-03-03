import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    Width: '9999px',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
});

class Channel extends React.Component {

  render() {
    const talks = this.props.talks.map(function (talk) {
        return (
          <ListItem key={talk.id} value={talk.id}>
            <Card className={styles.card}>
              <CardContent>
                <Typography>{talk.user_name + ' ' + talk.created_at}</Typography>
                <Typography className={styles.title}>
                  {talk.note}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        )
      }.bind(this)
    )

    return (
      <div>
        <List>
          {talks}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Channel);
