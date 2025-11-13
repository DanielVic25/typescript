class No<T> {
    public dir: No<T> | null;
    public esq: No<T> | null;
    public dado: T;

    constructor(dado: T) {
        this.dado = dado;
        // this.dir = this.esq = null;
        this.dir = null;
        this.esq = null;
    }

}

let raiz = new No<string>('A');
raiz.esq = new No<string>('B');
raiz.esq.esq = new No<string>('D');
raiz.esq.dir = new No<string>('E');

raiz.dir = new No<string>('C');
raiz.dir.esq = new No<string>('F');
raiz.dir.dir = new No<string>('G');


function preordem(arv: No<any>) {
    if(arv == null) return;
    console.log(`(${arv.dado})`);
    preordem(arv.esq);
    preordem(arv.dir);
}

function ordem_sim(arv: No<any>): void {
    if(arv == null) return;
    console.log(`(${arv.dado})`);
    ordem_sim(arv.esq);
}

function total_nos(arv: No<any>): number {
    if(arv == null) return;
    total_nos(arv.esq) + total_nos(arv.dir) + 1;
    
}

preordem(raiz);

console.log("==========================================")
let ab = new No<string>('D');
ab.esq = new No<string>('B');
ab.esq.esq = new No<string>('A');
ab.esq.dir = new No<string>('C');

ab.dir = new No<string>('F');
ab.dir.esq = new No<string>('E');
ab.dir.dir = new No<string>('G');

ordem_sim(ab);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")