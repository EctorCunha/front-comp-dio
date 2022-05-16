import {Template, Card, Chart, A} from './cards'

export function Cards({repositories}) {


  return (
    <Template>
      
      <Card>
        {repositories.map((repositories) => (
          <Chart key={repositories.id}>
            <h2>Repositórios:</h2>
            <h3> {repositories?.name}</h3>
            <p> {repositories?.full_name}</p>
            <A href= {repositories?.html_url} target="_blank"><p>{repositories?.html_url}</p></A>
          </Chart>
        ))}
        
      </Card>
    </Template>
  );
}
