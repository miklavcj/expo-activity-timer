import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Button } from 'react-native';
import SingleStepper from './SingleStepper';
import TimeStepper from './TimeStepper';

export default function ActivityScreen({ route, navigation }) {
	const [initTime, setInitTime] = useState(5);
	const [seconds, setSeconds] = useState(0);
	const [screen, setScreen] = useState('timer');
	const [pauseTimer, setPauseTimer] = useState(false);

	const [setsNum, setSetsNum] = useState(route.params.sets);
	const [roundsNum, setRoundsNum] = useState(route.params.rounds);

	const [workMin, setWorkMin] = useState(route.params.work[0]);
	const [workSec, setWorkSec] = useState(route.params.work[1]);

	const [restMin, setRestMin] = useState(route.params.rest[0]);
	const [restSec, setRestSec] = useState(route.params.rest[1]);

	const [roundsRestMin, setRoundsRestMin] = useState(route.params.roundsRest[0]);
	const [roundsRestSec, setRoundsRestSec] = useState(route.params.roundsRest[1]);

	let time = 5;
	// var pauseTimer = false;
	let interval, workInterval;

	const startInitTimer = () => {
		interval = setInterval(() => {
			if (!pauseTimer) {
				if (time > 0) {
					time = time - 1;
					setInitTime(initTime => initTime - 1);
					console.log(time);
				} else {
					setScreen('work');
					startWorkTimer();
					clearInterval(interval);
				}
			}
		}, 1000);
	};

	const startWorkTimer = () => {
		let workTime = parseInt(workSec) + parseInt(workMin) * 60;
		workInterval = setInterval(() => {
			if (!pauseTimer) {
				if (workTime > -1) {
					workTime = workTime - 1;
					console.log(workTime);
					decreaseTime(workTime, 'work');
				} else {
					clearInterval(workInterval);
				}
			} else {
				clearInterval(workInterval);
			}
		}, 1000);

		setTimeout(() => {
			clearInterval(workInterval);
			console.log('Work Interval cleared');
		}, workTime * 1100);
	};

	const decreaseTime = (time, type) => {
		if (type === 'work') {
			if (time === 0) {
				setWorkSec('00');
			} else if (time < 0) {
				if (Number(workMin) === 0) {
					setWorkSec('00');
					setWorkMin('00');
				} else {
					setWorkSec('59');
					let newMin = Number(workMin) - 1;
					setWorkMin(newMin >= 10 ? `${newMin}` : `0${newMin}`);
				}
			} else {
				setWorkSec(time >= 10 ? `${time}` : `0${time}`);
			}
		}

		if (type === 'rest') {
			if (time === 0) {
				setRestSec('00');
			} else if (time < 0) {
				if (Number(restMin) === 0) {
					setRestSec('00');
					setRestMin('00');
				} else {
					setRestSec('59');
					let newMin = Number(restMin) - 1;
					setRestMin(newMin >= 10 ? `${newMin}` : `0${newMin}`);
				}
			} else {
				setRestSec(time >= 10 ? `${time}` : `0${time}`);
			}
		}

		if (type === 'roundsRest') {
			if (time === 0) {
				setRoundsRestSec('00');
			} else if (time < 0) {
				if (Number(roundsRestMin) === 0) {
					setRoundsRestSec('00');
					setRoundsRestMin('00');
				} else {
					setRoundsRestSec('59');
					let newMin = Number(roundsRestMin) - 1;
					setRoundsRestMin(newMin >= 10 ? `${newMin}` : `0${newMin}`);
				}
			} else {
				setRoundsRestSec(time >= 10 ? `${time}` : `0${time}`);
			}
		}
	};

	useEffect(() => {
		startInitTimer();
    
	}, []);

	let timerScreen;

	switch (screen) {
		case 'timer':
			timerScreen = (
				<>
					<Text style={styles.h1}>Get Ready</Text>
					<Text style={styles.timer}>00:0{initTime} </Text>
				</>
			);
			break;
		case 'work':
			timerScreen = (
				<>
					<Text style={styles.h1}>Work</Text>
					<Text style={styles.timer}>
						{workMin}:{workSec}{' '}
					</Text>
				</>
			);
			break;
		default:
			break;
	}

	return (
		<View style={styles.container}>
			{timerScreen}
			<Button
				title='Pause / Start'
				onPress={() => {
					clearInterval(interval);
					console.log('Cleared');
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avoid: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	h1: {
		fontSize: 40,
	},
	timer: {
		fontSize: 50,
	},
});
