import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
       <Authenticator>
        {({ signOut }) => (
          <main>
            <header className='App-header'>
              {/* Quiz Component */}
              {/* Sign Out Button */}
              <button 
                onClick={signOut} 
                style={{ 
                  margin: '20px', 
                  fontSize: '0.8rem', 
                  padding: '5px 10px', 
                  marginTop: '20px'
                }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
