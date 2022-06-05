import {Template, Card, Chart, A} from './cards'

export function Cards({repositories}) {


  return (
    <Template>
      
      <Card>
        {repositories.map((repositorie) => (
          <Chart key={repositorie.id}>
            <h2>Repositórios:</h2>
            <h3> {repositorie?.name}</h3>
            <p> {repositorie?.full_name}</p>
            <A href= {repositorie?.html_url} target="_blank"><p>{repositories?.html_url}</p></A>
          </Chart>
        ))}
        
      </Card>
    </Template>
  );
}
