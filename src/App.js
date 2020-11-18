import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form action="https://tinyurl.com/create.php" method="post" target="_blank">
        <table align="center" cellpadding="5" bgcolor="#E7E7F7">
          <tr>
            <td>
              <b>Enter a long URL to make <a href="https://tinyurl.com">tiny</a>:</b><br/>
              <input type="text" name="url" size="30"/><input type="submit" name="submit" value="Make TinyURL!"/>
            </td>
          </tr>
        </table>
      </form>
      </header>
    </div>
  );
}

export default App;
