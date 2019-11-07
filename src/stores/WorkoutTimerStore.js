import {observable, decorate, action, computed} from 'mobx';
import dayjs from 'dayjs';

const padZero = (n: number) => {
  if (n >= 10) {
    return n;
  }
  return `0${n}`;
};

export class WorkoutTimerStore {
  startTime = dayjs();
  isRunning = false;
  seconds = 0;

  measure() {
    if (!this.isRunning) {
      return;
    }

    this.seconds = dayjs().diff(this.startTime, 'second');
    setTimeout(() => this.measure(), 1000);
  }

  startTimer() {
    this.isRunning = true;
    this.startTime = dayjs();
    this.measure();
  }

  stopTimer() {
    this.isRunning = false;
    this.seconds = 0;
  }

  get display() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }
  get percent() {
    return `${Math.min(100, (this.seconds / 180) * 100)}%`;
  }
}

decorate(WorkoutTimerStore, {
  startTime: observable,
  isRunning: observable,
  seconds: observable,
  startTimer: action,
  measure: action,
  display: computed,
  percent: computed,
});
