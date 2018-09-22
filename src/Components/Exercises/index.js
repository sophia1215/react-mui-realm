import React, { Fragment } from "react"
import {
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  IconButton, 
} from "@material-ui/core"
import { Edit, Delete } from "@material-ui/icons"
import { withStyles } from "@material-ui/core"
import Form from "./Form"

const styles = theme => ({
  Paper: { 
    padding: 20, 
    marginTop: 5, 
    // marginBottom: 10, 
    height: 500, 
    overflowY: 'auto' 
  }
})

export default withStyles(styles)(
  ({
    classes,
    muscles,
    exercises, 
    category,
    editMode,
    onSelect,
    exercise,
    exercise: {
      id,
      title = "Welcome!",
      description = "Please select an exercise from the list on the left."
    },
    onDelete,
    onSelectEdit,
    onEdit,
  }) =>
  <Grid container>
    <Grid item xs={12} sm={3}>
      <Paper className = { classes.Paper } >
        {exercises.map(([group, exercises]) => 
         !category || category === group
          ?<Fragment key = { group }>
            <Typography 
              variant = "headline"
              style = {{textTransform: 'capitalize'}}
            >
              { group }
            </Typography>
            <List component="ul">
              {exercises.map(({ id, title }) =>
                <ListItem
                  key = { id }
                  button
                  onClick = {() => onSelect(id)}
                >
                  <ListItemText primary= { title } />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => onSelectEdit(id)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDelete(id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </Fragment>
          : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={12} sm={9}>
      <Paper className = { classes.Paper } >
        {editMode
        ? <Form
            exercise = { exercise }
            muscles = { muscles }
            onSubmit = { onEdit }
          />
        : <Fragment>
            <Typography
            variant = "display1"
            >
              { title }
            </Typography>
            <Typography
              variant = "subheading"
              style = {{marginTop: 20}}
            >
              { description }
            </Typography>
          </Fragment>
        }
        
      </Paper>
    </Grid>
  </Grid>
)