package com.rnnexample;

import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new RNGoogleSigninPackage()
    );
  }

  @Override
  public String getJSMainModuleName() {
    return "index.android";
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
