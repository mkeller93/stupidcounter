export class Statistic {
    $key: string;
    MonMorning: number;
    MonAfternoon: number;
    TueMorning: number;
    TueAfternoon: number;
    WedMorning: number;
    WedAfternoon: number;
    ThuMorning: number;
    ThuAfternoon: number;
    FrMorning: number;
    FrAfternoon: number;

    constructor() {
        this.MonMorning = 0;
        this.MonAfternoon = 0;    
        this.TueMorning = 0;
        this.TueAfternoon = 0;
        this.WedMorning = 0;
        this.WedAfternoon = 0;
        this.ThuMorning = 0;
        this.ThuAfternoon = 0;
        this.FrMorning = 0;
        this.FrAfternoon = 0;    
    }
}