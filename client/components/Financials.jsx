import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '60%',
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Financials(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* --------------------{Current Price}-------------------- */}
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: 'mediumseagreen',
            }}
          >
            {props.companyData.c
              ? 'Current Price: $' + props.companyData.c.toFixed(2)
              : 'CurrentPrice'}
          </Paper>
        </Grid>
        {/* --------------------{52 Week High}-------------------- */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ background: 'rgba(20,29,38, 1)', color: 'mediumseagreen' }}
          >
            {props.companyData.metric
              ? props.companyData.c > props.companyData.metric['52WeekHigh']
                ? '52 Week High: $' + props.companyData.c.toFixed(2)
                : '52 Week High: $' +
                  props.companyData.metric['52WeekHigh'].toFixed(2)
              : '52 Week High'}
          </Paper>
        </Grid>
        {/* --------------------{52 Week Low}-------------------- */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ background: 'rgba(20,29,38, 1)', color: 'mediumseagreen' }}
          >
            {props.companyData.metric
              ? props.companyData.c < props.companyData.metric['52WeekLow']
                ? '52 Week Low: $' + props.companyData.c.toFixed(2)
                : '52 Week Low: $' +
                  props.companyData.metric['52WeekLow'].toFixed(2)
              : '52 Week Low'}
          </Paper>
        </Grid>
        {/* --------------------{10 Day avg. trading volume}-------------------- */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ background: 'rgba(20,29,38, 1)', color: 'mediumseagreen' }}
          >
            {props.companyData.metric
              ? '10 Day Avg. Volume: ' +
                Math.round(
                  props.companyData.metric['10DayAverageTradingVolume']
                ) +
                ' shares'
              : '10 Day Avg. Volume'}
          </Paper>
        </Grid>
        {/* --------------------{3 Month avg. trading volume}-------------------- */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ background: 'rgba(20,29,38, 1)', color: 'mediumseagreen' }}
          >
            {props.companyData.metric
              ? '3 Month Avg. Volume: ' +
                Math.round(
                  props.companyData.metric['3MonthAverageTradingVolume']
                ) +
                ' shares'
              : '3 Month Avg. Volume'}
          </Paper>
        </Grid>
        {/* --------------------{Beta}-------------------- */}
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric.beta < 1
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Beta: ' + props.companyData.metric.beta.toFixed(2)
              : 'Beta'}
          </Paper>
        </Grid>
        {/* --------------------{Basic EPS Annual}-------------------- */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['epsBasicExclExtraItemsAnnual'] > 0
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Basic EPS: $' +
                props.companyData.metric[
                  'epsBasicExclExtraItemsAnnual'
                ].toFixed(2)
              : 'Basic EPS'}
          </Paper>
        </Grid>
        {/* --------------------{Normalized EPS Annual}-------------------- */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['epsNormalizedAnnual']
                  ? props.companyData.metric['epsNormalizedAnnual'] !== null
                    ? props.companyData.metric['epsNormalizedAnnual'] > 0
                      ? 'mediumseagreen'
                      : 'crimson'
                    : 'white'
                  : 'white'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? props.companyData.metric['peNormalizedAnnual']
                ? props.companyData.metric['peNormalizedAnnual'] !== null
                  ? 'Normalized EPS: $' +
                    props.companyData.metric['epsNormalizedAnnual'].toFixed(2)
                  : 'Normalized EPS'
                : 'Normalized EPS'
              : 'Normalized EPS'}
          </Paper>
        </Grid>
        {/* --------------------{Gross Margin TTM}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['grossMarginTTM'] > 0
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Gross Profit Margin (TTM): ' +
                props.companyData.metric['grossMarginTTM'].toFixed(2) +
                '%'
              : 'Gross Profit Margin (TTM)'}
          </Paper>
        </Grid>
        {/* --------------------{Net Margin TTM}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['netProfitMarginTTM'] > 0
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Net Profit Margin (TTM): ' +
                props.companyData.metric['netProfitMarginTTM'].toFixed(2) +
                '%'
              : 'Net Profit Margin (TTM)'}
          </Paper>
        </Grid>
        {/* --------------------{Free Cash Flow per Share}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['freeCashFlowPerShareTTM'] > 0
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Free Cash Flow per Share (TTM): $' +
                props.companyData.metric['freeCashFlowPerShareTTM'].toFixed(2)
              : 'Free Cash Flow per Share (TTM)'}
          </Paper>
        </Grid>
        {/* --------------------{Current Ratio Annual}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['currentRatioAnnual']
                  ? props.companyData.metric['currentRatioAnnual'] !== null
                    ? props.companyData.metric['currentRatioAnnual'] > 1
                      ? 'mediumseagreen'
                      : 'crimson'
                    : 'white'
                  : 'white'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? props.companyData.metric['currentRatioAnnual']
                ? props.companyData.metric['currentRatioAnnual'] !== null
                  ? 'Annual Current Ratio: ' +
                    props.companyData.metric['currentRatioAnnual'].toFixed(2) +
                    '%'
                  : 'Annual Current Ratio'
                : 'Annual Current Ratio'
              : 'Annual Current Ratio'}
          </Paper>
        </Grid>
        {/* --------------------{Quick Ratio Annual}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['quickRatioAnnual']
                  ? props.companyData.metric['quickRatioAnnual'] !== null
                    ? props.companyData.metric['quickRatioAnnual'] > 1
                      ? 'mediumseagreen'
                      : 'crimson'
                    : 'white'
                  : 'white'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? props.companyData.metric['quickRatioAnnual']
                ? props.companyData.metric['quickRatioAnnual'] !== null
                  ? 'Annual Quick Ratio: ' +
                    props.companyData.metric['quickRatioAnnual'].toFixed(2) +
                    '%'
                  : 'Annual Quick Ratio'
                : 'Annual Quick Ratio'
              : 'Annual Quick Ratio'}
          </Paper>
        </Grid>
        {/* --------------------{Normalized P/E Ratio Annual}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['peNormalizedAnnual']
                  ? props.companyData.metric['peNormalizedAnnual'] !== null
                    ? props.companyData.metric['peNormalizedAnnual'] <= 30 &&
                      props.companyData.metric['peNormalizedAnnual'] >= 5
                      ? 'mediumseagreen'
                      : 'crimson'
                    : 'white'
                  : 'white'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? props.companyData.metric['peNormalizedAnnual']
                ? props.companyData.metric['peNormalizedAnnual'] !== null
                  ? 'Annual Normalized P/E: ' +
                    props.companyData.metric['peNormalizedAnnual'].toFixed(2) +
                    'x'
                  : 'Annual Normalized P/E'
                : 'Annual Normalized P/E'
              : 'Annual Normalized P/E'}
          </Paper>
        </Grid>
        {/* --------------------{Return on Equity TTM}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['roeTTM'] >= 5
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Return on Equity (TTM): ' +
                props.companyData.metric['roeTTM'].toFixed(2) +
                '%'
              : 'Return on Equity (TTM)'}
          </Paper>
        </Grid>
        {/* --------------------{Return on Investment TTM}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['roiTTM'] >= 5
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Return on Investment (TTM): ' +
                props.companyData.metric['roiTTM'].toFixed(2) +
                '%'
              : 'Return on Investment (TTM)'}
          </Paper>
        </Grid>
        {/* --------------------{Debt to Equity Ratio}-------------------- */}
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: props.companyData.metric
                ? props.companyData.metric['totalDebt/totalEquityAnnual'] < 100
                  ? 'mediumseagreen'
                  : 'crimson'
                : 'white',
            }}
          >
            {props.companyData.metric
              ? 'Debt to Equity Ratio: ' +
                props.companyData.metric['totalDebt/totalEquityAnnual'].toFixed(
                  2
                ) +
                '%'
              : 'Debt to Equity Ratio'}
          </Paper>
        </Grid>
        {/* --------------------{Recommendations}-------------------- */}
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: 'white',
            }}
          >
            {props.companyData
              ? props.companyData['0']
                ? props.companyData['0'].period
                  ? 'Recommendations as of (' +
                    props.companyData['0'].period +
                    ')'
                  : 'Recommendations'
                : 'Recommendations'
              : 'Recommendations'}
            <Grid container spacing={3}>
              {/* --------------------{Buy recommendation}-------------------- */}
              <Grid item xs={4}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'mediumseagreen',
                  }}
                >
                  {props.companyData
                    ? props.companyData['0']
                      ? props.companyData['0'].buy >= 0
                        ? 'Buy: ' + props.companyData['0'].buy
                        : 'Buy'
                      : 'Buy'
                    : 'Buy'}
                </Paper>
              </Grid>
              {/* --------------------{Hold recommendation}-------------------- */}
              <Grid item xs={4}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'white',
                  }}
                >
                  {props.companyData
                    ? props.companyData['0']
                      ? props.companyData['0'].hold >= 0
                        ? 'Hold: ' + props.companyData['0'].hold
                        : 'Hold'
                      : 'Hold'
                    : 'Hold'}
                </Paper>
              </Grid>
              {/* --------------------{Sell recommendation}-------------------- */}
              <Grid item xs={4}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'crimson',
                  }}
                >
                  {props.companyData
                    ? props.companyData['0']
                      ? props.companyData['0'].sell >= 0
                        ? 'Sell: ' + props.companyData['0'].sell
                        : 'Sell'
                      : 'Sell'
                    : 'Sell'}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* --------------------{Price Targets}-------------------- */}
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              background: 'rgba(20,29,38, 1)',
              color: 'white',
            }}
          >
            {props.companyData
              ? props.companyData.lastUpdated
                ? 'Price Targets as of (' +
                  props.companyData.lastUpdated.slice(0, 10) +
                  ')'
                : 'Price Targets'
              : 'Price Targets'}
            <Grid container spacing={3}>
              {/* --------------------{High Target}-------------------- */}
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'mediumseagreen',
                  }}
                >
                  {props.companyData
                    ? props.companyData.targetHigh
                      ? 'High: $' + props.companyData.targetHigh
                      : 'High Target'
                    : 'High Target'}
                </Paper>
              </Grid>
              {/* --------------------{Low Target}-------------------- */}
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'mediumseagreen',
                  }}
                >
                  {props.companyData
                    ? props.companyData.targetLow
                      ? 'Low: $' + props.companyData.targetLow
                      : 'Low Target'
                    : 'Low Target'}
                </Paper>
              </Grid>
              {/* --------------------{Mean Target}-------------------- */}
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'mediumseagreen',
                  }}
                >
                  {props.companyData
                    ? props.companyData.targetMean
                      ? 'Mean: $' + props.companyData.targetMean
                      : 'Mean Target'
                    : 'Mean Target'}
                </Paper>
              </Grid>
              {/* --------------------{Median Target}-------------------- */}
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  style={{
                    background: 'rgba(20,29,38, 1)',
                    color: 'mediumseagreen',
                  }}
                >
                  {props.companyData
                    ? props.companyData.targetMedian
                      ? 'Median: $' + props.companyData.targetMedian
                      : 'Median Target'
                    : 'Median Target'}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
