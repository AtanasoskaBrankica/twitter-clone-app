import {NavBar} from '../../containers/NavBar/NavBar';
import {Search} from '../../containers/Search/Search';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PageWrapper = ({children}: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <Search />
    </>
  );
};
