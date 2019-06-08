import React from 'react';
import { render } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import {
  // State or Local Processing Plugins
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import { Button } from '@material-ui/core';
import cars from './cars-copy';

const styles = theme => ({
    tableStriped: {
      '& tbody tr:nth-of-type(odd)': {
        backgroundColor: fade(theme.palette.primary.main, 0.15),
      },
    },
  });
  
  const TableComponentBase = ({ classes, ...restProps }) => (
    <Table.Table
      {...restProps}
      className={classes.tableStriped}
    />
  );
  
 export const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);
  
class CarGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("props.days"+props.days)
    this.state = {
      days: props.days,
      columns: [
        { name: "image", title: "Zjęcie" },
        { name: "model", title: "Model" },
        { name: "year", title: "Rok" },
        { name: "params", title: "Opis" },
        {name: "price", title: "Cena"},
        {name: "book", title: "Zarezerwuj"}
      ],
    rows: cars.map(car => {return {image: <img src={car.image} className="rounded"></img>, model: car.model, year: car.year, 
        params: <ul><li>{car.params.engine}</li><li>{car.params.transmission}</li></ul>, price:car.price * props.days, book: <Button color="secondary">Zarezerwuj</Button>}})
    };
  }
  render() {
    const { rows, columns } = this.state;

    return (
      <Grid rows={rows} columns={columns}>
        <Table tableComponent={TableComponent}/>
        <TableHeaderRow />
      </Grid>
    );
  }
}
export default CarGrid;