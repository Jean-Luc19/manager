import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Jean-Luc" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeholder="444-3333" />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
