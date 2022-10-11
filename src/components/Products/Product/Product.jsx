import React from 'react'
import { Card, CardMedia, CardContent, CardActions, IconButton} from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';

import useStyles from './productStyles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <h2 className={classes.cardHeader}>{product.name}</h2>
          <h2 className={classes.cardHeader}>{product.price.formatted_with_symbol}</h2>
        </div>
        <p className={classes.cardDescription}>{product.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product;
